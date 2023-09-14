import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
 
interface InputCardProps {
  className?: string,
}

export function InputCard({ className }: InputCardProps) {
  return (
    <Card className={cn("w-[350px] h-full", className)} >
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>Your location will be detected.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-5">
              <Label className="text-2xl font-bold" htmlFor="cuisine">What kind of cuisine are you looking for?</Label>
              <Select>
                <SelectTrigger id="cuisine">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="thai">Thai</SelectItem>
                  <SelectItem value="european">European</SelectItem>
                  <SelectItem value="italian">Italian</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Search</Button>
      </CardFooter>
    </Card>
  )
}