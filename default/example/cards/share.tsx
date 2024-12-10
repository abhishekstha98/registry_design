"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"
import { Separator } from "@/registry/default/ui/separator"
import { Delete } from "lucide-react"

export function CardsShare({title}: any) {
  
  return (
    <Card className="m-12">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Copy or visit links
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            id="link"
            value="http://example.com/link/to/document"
            readOnly
          />
          <Button variant="secondary" className="shrink-0">
            Copy Link
          </Button>
          <Button variant="outline" className="shrink-0">
            Visit
          </Button>
        </div>
        <div className="my-2" >
            <div className="flex space-x-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            id="link"
            value="http://example.com/link/to/document"
            readOnly
          />
          <Button variant="secondary" className="shrink-0">
            Copy Link
          </Button>
          <Button variant="outline" className="shrink-0">
            Visit
          </Button>
          
        </div>
        
        </div>
        <div className="my-2" >
            <div className="flex space-x-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            id="link"
            value="http://example.com/link/to/document"
            readOnly
          />
          <Button variant="secondary" className="shrink-0">
            Copy Link
          </Button>
          <Button variant="outline" className="shrink-0">
            Visit
          </Button>
        </div>
        
        </div>
        <Separator className="my-4" />
      </CardContent>
    </Card>
  )
}
