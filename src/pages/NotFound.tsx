import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Page non trouvée</h2>
        <p className="text-gray-600 max-w-md mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button asChild size="lg">
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </Layout>
  );
}