import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grain">
      <div className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="display mt-6 text-6xl text-navy md:text-8xl">
          This wall is <em className="text-gold">still bare.</em>
        </h1>
        <p className="mt-6 max-w-md text-muted">The page you’re looking for doesn’t exist or has moved.</p>
        <Link href="/" className="btn btn-primary mt-10">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    </section>
  );
}
