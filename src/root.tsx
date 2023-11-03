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
  Style,
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
        {/* <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap"
        /> */}
        {/* <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;800&display=swap"
        /> */}
        {/* <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        /> */}
        {/* <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;800&display=swap"
        /> */}
        {/* <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap"
        /> */}
        {/* <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        /> */}
        <Style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900;1000&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');
        </Style>
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
