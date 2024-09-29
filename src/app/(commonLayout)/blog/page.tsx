import { title } from "@/src/components/ui/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={`${title({ size: "lg", color: "foreground" })}`}>Blog</h1>
    </div>
  );
}
