import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

function App() {
  return (
    <div>
      <Input placeholder="Enter your email" />
      <Button>Click me</Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Click me</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Click me</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog>
        <DialogTrigger>
          <Button>Click me</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Click me</DialogTitle>
          </DialogHeader>
          <DialogDescription>Click me</DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
