import { Routes } from "@angular/router";
import { BlogPage } from "./blog-page/blog-page";
import { ContactPage } from "./contact-page/contact-page";
import { HomePage } from "./home-page/home-page";
import { LabsPage } from "./labs-page/labs-page";
import { ProjectsPage } from "./projects-page/projects-page";
import { DesignPage } from "./design-page/design-page";

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'blog',
    component: BlogPage
  },
  {
    path: 'projects',
    component: ProjectsPage
  },
  {
    path: 'labs',
    component: LabsPage
  },
  {
    path: 'contact',
    component: ContactPage
  },
  {
    path: 'design',
    component: DesignPage
  }
];
