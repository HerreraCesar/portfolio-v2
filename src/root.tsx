import "./root.scss";

import {
  Body,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Route,
  Scripts,
  Title,
} from "solid-start";

import { ApplicationProvider } from "./context/context";
import { ErrorBoundary } from "solid-start/error-boundary";
import Redirect from "./components/Redirect/Redirect";
import { Routes } from "solid-start";
import { inject } from "@vercel/analytics";

inject();

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Portfolio: Herrera César</Title>
        <Meta
          name="description"
          content="Second version of my personal portfolio created with modern technologies as Solid Start, Vite and TypeScript."
        />
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" type="image/x-icon" href="favicon.webp" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap"
        />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
        />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
      </Head>
      <ApplicationProvider>
        <Body id="body">
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
              <Route path="/*" component={Redirect} />
            </Routes>
          </ErrorBoundary>
          <Scripts />
        </Body>
      </ApplicationProvider>
    </Html>
  );
}
