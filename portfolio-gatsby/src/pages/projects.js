import * as React from "react";
import PageLayout from "../components/PageLayout";
import BasicPage from "../components/BasicPage";
import Stack from "../components/Stack";
import Text from "../components/Text";
import Icon from "../components/Icon";
import Inline from "../components/Inline";
import Link from "../components/Link";

function ProjectCard(props) {
  return (
    <Stack gap={3}>
      <Text color="strong" sans weight="bold" size={8}>
        {props.title}
      </Text>
      <Text size={4}>
        <Inline gap={3}>
          <Link target="_blank" href={props.url}>
            <Icon icon="arrow-up-right-from-square" /> Live demo
          </Link>
          <Link target="_blank" href={props.github}>
            <Icon icon={["fab", "github"]} /> GitHub
          </Link>
        </Inline>
      </Text>
      <Text align="justify">{props.description}</Text>
    </Stack>
  );
}

const IndexPage = () => {
  return (
    <PageLayout>
      <BasicPage>
        <Stack gap={10}>
          <ProjectCard
            title="React Weekly Availability"
            description="A use case I've encountered a few times is to ask users for their general availability on a weekly basis. This react component makes that super simple with good UX."
            github="https://github.com/felixsebastian/gong-simulator"
            url="https://csb-g0fn1k-felixsebastian.vercel.app/"
          />
          <ProjectCard
            title="Gong simulator"
            description="Whipped up this virtual gong one afternoon, useful for announcements."
            github="https://github.com/felixsebastian/gong-simulator"
            url="https://csb-g0fn1k-felixsebastian.vercel.app/"
          />
          <ProjectCard
            title="Posix design system"
            description="Design system used to build this site."
            github="https://github.com/felixsebastian/gong-simulator"
            url="https://csb-g0fn1k-felixsebastian.vercel.app/"
          />
          <ProjectCard
            title="Solar system builder"
            description="Create your own solar system"
            github="https://github.com/felixsebastian/gong-simulator"
            url="https://csb-g0fn1k-felixsebastian.vercel.app/"
          />
        </Stack>
      </BasicPage>
    </PageLayout>
  );
};

export default IndexPage;
