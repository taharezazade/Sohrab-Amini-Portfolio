import { Element } from "react-scroll";
import { useMemo, useState } from "react";

import PortfolioHeader from "./PortfolioHeader";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioDrawer from "./PortfolioDrawer";

import usePortfolio from "@/hooks/usePortfolio";

function Portfolio() {
  const { portfolio, loading, error } = usePortfolio();

  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [selectedProject, setSelectedProject] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const portfolioCategories = useMemo(() => {
    const categories = portfolio
      .map((item) => item.category)
      .filter(Boolean);

    return ["همه", ...new Set(categories)];
  }, [portfolio]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "همه") {
      return portfolio;
    }

    return portfolio.filter(
      (item) => item.category === selectedCategory,
    );
  }, [portfolio, selectedCategory]);

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const handleCloseProject = () => {
    setDrawerOpen(false);

    window.setTimeout(() => {
      setSelectedProject(null);
    }, 250);
  };

  return (
    <Element name="portfolio">
      <section className="container mx-auto px-6 py-28">
        <PortfolioHeader />

        <PortfolioFilter
          categories={portfolioCategories}
          selectedCategory={selectedCategory}
          onChangeCategory={handleChangeCategory}
        />

        <PortfolioGrid
          projects={filteredProjects}
          loading={loading}
          error={error}
          onOpen={handleOpenProject}
        />
      </section>

      <PortfolioDrawer
        project={selectedProject}
        open={drawerOpen}
        onClose={handleCloseProject}
      />
    </Element>
  );
}

export default Portfolio;
