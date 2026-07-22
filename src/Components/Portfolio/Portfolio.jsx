import { Element } from "react-scroll";
import { useMemo, useState } from "react";

import PortfolioHeader from "./PortfolioHeader";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioDrawer from "./PortfolioDrawer";

import { portfolioItems, portfolioCategories } from "./portfolio.data";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [selectedProject, setSelectedProject] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "همه") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const handleCloseProject = () => {
    setDrawerOpen(false);

    setTimeout(() => {
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
          onChangeCategory={setSelectedCategory}
        />

        <PortfolioGrid projects={filteredProjects} onOpen={handleOpenProject} />
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
