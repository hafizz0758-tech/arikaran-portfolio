import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return <section className="not-found wrap"><span className="eyebrow"><span /> 404 / LOST IN SPACE</span><h1>This page took<br /><span className="gradient-text">a wrong turn.</span></h1><p>The page you're looking for doesn't exist or may have moved.</p><Link to="/" className="button button-primary"><ArrowLeft size={15} /> Back home</Link></section>;
}
