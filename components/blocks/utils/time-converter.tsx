"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, ArrowRight, RotateCcw } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

type TimeSystem = 'earth' | 'sodonian' | 'infernian' | 'creator';

interface TimeInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

interface ConversionResult {
  system: TimeSystem;
  display: string;
  valid: boolean;
  error?: string;
}

export default function TimeConverter() {
  const [inputSystem, setInputSystem] = useState<TimeSystem>('earth');
  const [outputSystem, setOutputSystem] = useState<TimeSystem>('sodonian');
  const [timeInput, setTimeInput] = useState<TimeInput>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes()
  });
  const [result, setResult] = useState<ConversionResult | null>(null);

  const timeSystemNames = {
    earth: "Earth Time",
    sodonian: "Sodonian Time", 
    infernian: "Infernian Time",
    creator: "Creator Time"
  };

  const timeSystemDescriptions = {
    earth: "Standard Earth calendar system (Gregorian calendar)",
    sodonian: "Similar to Earth time but with a different zero point reference",
    infernian: "Alternative time counting system (calculations pending)",
    creator: "Time measured in cycles (requires conversion script)"
  };

  // Sodonian time offset (example: 1000 years before Earth time)
  const SODONIAN_YEAR_OFFSET = -1000;

  const convertTime = () => {
    try {
      // Validate input
      if (timeInput.year < 1 || timeInput.month < 1 || timeInput.month > 12 || 
          timeInput.day < 1 || timeInput.day > 31 || timeInput.hour < 0 || 
          timeInput.hour > 23 || timeInput.minute < 0 || timeInput.minute > 59) {
        setResult({
          system: outputSystem,
          display: "Invalid input values",
          valid: false,
          error: "Please check your input values"
        });
        return;
      }

      let convertedTime: TimeInput;

      // Convert input to Earth time first (as base reference)
      let earthTime: TimeInput;
      
      switch (inputSystem) {
        case 'earth':
          earthTime = { ...timeInput };
          break;
        case 'sodonian':
          earthTime = {
            ...timeInput,
            year: timeInput.year - SODONIAN_YEAR_OFFSET
          };
          break;
        case 'infernian':
          setResult({
            system: outputSystem,
            display: "Infernian time conversion not yet implemented",
            valid: false,
            error: "Conversion calculations are pending implementation"
          });
          return;
        case 'creator':
          setResult({
            system: outputSystem,
            display: "Creator time conversion requires additional script",
            valid: false,
            error: "Please provide the Python conversion script"
          });
          return;
        default:
          earthTime = { ...timeInput };
      }

      // Convert from Earth time to target system
      switch (outputSystem) {
        case 'earth':
          convertedTime = { ...earthTime };
          break;
        case 'sodonian':
          convertedTime = {
            ...earthTime,
            year: earthTime.year + SODONIAN_YEAR_OFFSET
          };
          break;
        case 'infernian':
          setResult({
            system: outputSystem,
            display: "Infernian time conversion not yet implemented",
            valid: false,
            error: "Conversion calculations are pending implementation"
          });
          return;
        case 'creator':
          setResult({
            system: outputSystem,
            display: "Creator time conversion requires additional script",
            valid: false,
            error: "Please provide the Python conversion script"
          });
          return;
        default:
          convertedTime = { ...earthTime };
      }

      // Format the result
      const formatTime = (time: TimeInput, system: TimeSystem): string => {
        const formattedDate = `${time.year.toString().padStart(4, '0')}-${time.month.toString().padStart(2, '0')}-${time.day.toString().padStart(2, '0')}`;
        const formattedTime = `${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}`;
        
        switch (system) {
          case 'sodonian':
            return `${formattedDate} ${formattedTime} (Sodonian Era)`;
          default:
            return `${formattedDate} ${formattedTime}`;
        }
      };

      setResult({
        system: outputSystem,
        display: formatTime(convertedTime, outputSystem),
        valid: true
      });

    } catch (error) {
      setResult({
        system: outputSystem,
        display: "Conversion failed",
        valid: false,
        error: error instanceof Error ? error.message : "Unknown error occurred"
      });
    }
  };

  const handleInputChange = (field: keyof TimeInput, value: string) => {
    const numValue = parseInt(value) || 0;
    setTimeInput(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  const resetToCurrentTime = () => {
    const now = new Date();
    setTimeInput({
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
      hour: now.getHours(),
      minute: now.getMinutes()
    });
    setResult(null);
  };

  const swapSystems = () => {
    const temp = inputSystem;
    setInputSystem(outputSystem);
    setOutputSystem(temp);
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Input Time
          </CardTitle>
          <CardDescription>
            Enter the time you want to convert from the selected time system.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="input-system">Input Time System</Label>
              <Select value={inputSystem} onValueChange={(value: TimeSystem) => setInputSystem(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(timeSystemNames).map(([key, name]) => (
                    <SelectItem key={key} value={key}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                {timeSystemDescriptions[inputSystem]}
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="output-system">Output Time System</Label>
              <Select value={outputSystem} onValueChange={(value: TimeSystem) => setOutputSystem(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(timeSystemNames).map(([key, name]) => (
                    <SelectItem key={key} value={key}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                {timeSystemDescriptions[outputSystem]}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                type="number"
                value={timeInput.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
                placeholder="2024"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="month">Month</Label>
              <Input
                id="month"
                type="number"
                min="1"
                max="12"
                value={timeInput.month}
                onChange={(e) => handleInputChange('month', e.target.value)}
                placeholder="12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="day">Day</Label>
              <Input
                id="day"
                type="number"
                min="1"
                max="31"
                value={timeInput.day}
                onChange={(e) => handleInputChange('day', e.target.value)}
                placeholder="31"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hour">Hour</Label>
              <Input
                id="hour"
                type="number"
                min="0"
                max="23"
                value={timeInput.hour}
                onChange={(e) => handleInputChange('hour', e.target.value)}
                placeholder="23"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minute">Minute</Label>
              <Input
                id="minute"
                type="number"
                min="0"
                max="59"
                value={timeInput.minute}
                onChange={(e) => handleInputChange('minute', e.target.value)}
                placeholder="59"
              />
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button onClick={convertTime} className="flex-1 md:flex-none">
              <ArrowRight className="h-4 w-4 mr-2" />
              Convert Time
            </Button>
            <Button variant="outline" onClick={swapSystems}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Swap Systems
            </Button>
            <Button variant="outline" onClick={resetToCurrentTime}>
              <Clock className="h-4 w-4 mr-2" />
              Use Current Time
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Result Section */}
      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Conversion Result
            </CardTitle>
            <CardDescription>
              Time converted to {timeSystemNames[result.system]}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {result.valid ? (
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-lg font-mono">{result.display}</p>
              </div>
            ) : (
              <Alert>
                <AlertDescription>
                  <strong>Conversion Error:</strong> {result.error}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      )}

      {/* Information Section */}
      <Card>
        <CardHeader>
          <CardTitle>Time System Information</CardTitle>
          <CardDescription>
            Learn about the different time systems available for conversion.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-semibold">Earth Time</h3>
              <p className="text-sm text-muted-foreground">
                The standard Gregorian calendar system used on Earth. Based on solar years with 365/366 days.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Sodonian Time</h3>
              <p className="text-sm text-muted-foreground">
                Similar calculation method to Earth time but with a different epoch/zero point. Currently set to {Math.abs(SODONIAN_YEAR_OFFSET)} years before Earth time.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Infernian Time</h3>
              <p className="text-sm text-muted-foreground">
                An alternative time counting system with different calculation methods. Implementation pending.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Creator Time</h3>
              <p className="text-sm text-muted-foreground">
                Time measured in cycles rather than traditional year/month/day format. Requires a specific conversion algorithm.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}