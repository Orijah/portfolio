import * as React from "react";
import PageLayout from "../components/PageLayout";
import BasicPage from "../components/BasicPage";
import Stack from "../components/Stack";
import Text from "../components/Text";
import Icon from "../components/Icon";
import Link from "../components/Link";
import gs from "../utils/gs";
import { css } from "@emotion/react";

const SideLink = (props) => (
  <Link href={props.url} target="_blank">
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: ${gs(1)};
      `}
    >
      {props.children}
      <Text size={0}>
        <Icon icon="arrow-up-right-from-square" />
      </Text>
    </div>
  </Link>
);

const BookPost = (props) => (
  <Stack>
    <Text bold sans tight color="strong" size={6}>
      <Icon icon="book" /> {props.title}
    </Text>
    <Text weight={500} sans color="weak" size={4}>
      {props.author} ({props.year})
    </Text>
    <Text>{props.comments}</Text>
  </Stack>
);

const PaperPost = (props) => (
  <Stack>
    <SideLink {...props}>
      <Text bold sans tight color="strong" size={6}>
        <Icon icon="file-lines" /> {props.title}
      </Text>
    </SideLink>
    <Text weight={500} sans color="weak" size={4}>
      {props.author} ({props.year})
    </Text>
    <Text>{props.comments}</Text>
  </Stack>
);

const BlogPost = (props) => (
  <Stack>
    <SideLink {...props}>
      <Text bold sans tight color="strong" size={6}>
        <Icon icon="pen-clip" /> {props.title}
      </Text>
    </SideLink>
    <Text weight={500} sans color="weak" size={4}>
      {props.author} ({props.year})
    </Text>
    <Text>{props.comments}</Text>
  </Stack>
);

const YouTubePost = (props) => (
  <Stack>
    <Text bold sans tight color="strong" size={6}>
      <Icon icon={["fab", "youtube"]} /> {props.title}
    </Text>
    <Text>{props.description}</Text>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.id}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </Stack>
);

const IndexPage = () => {
  return (
    <PageLayout>
      <BasicPage>
        <Stack gap={10}>
          <BookPost
            title="A Philosophy of Software Design"
            author="John Ousterhout"
            year="2018"
            comments="Still reading this, very interesting so far."
          />
          <BlogPost
            title="The TypeScript Tax"
            author="Eric Elliot"
            year="2019"
            url="https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b"
            comments="Very nice analysis that supports many of my intuitions about TypeScript."
          />
          <BookPost
            title="Domain-Driven Design"
            author="Eric Evans"
            year="2003"
            comments="Evans' idea of ubiquitous language seems like a formalisation of what's normally left to developers intuition and common sense. While this might be useful in some high stakes settings where domain experts are available, and has led to the discovery of other important concepts, my feeling is that it's probably unhelpful for most projects. I love how clearly Evans writes and still got a lot out of the book."
          />
          <BookPost
            title="Domain-Driven Design Distilled"
            author="Vaughn Vernon"
            year="2016"
            comments="I didn't enjoy this author nearly as much as Evans, but it was the perfect introduction to the topic."
          />
          <PaperPost
            title="Static Typing Where Possible, Dynamic Typing When Needed"
            author="Eric Meijer, Peter Drayton"
            year="2004"
            url="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.69.5966&rep=rep1&type=pdf"
            comments="Thankfully TypeScript affords us this flexibility."
          />
          <BookPost
            title="Clean Architecture"
            author="Robert Martin"
            year="2017"
            comments="Despite being published more recently than Clean Code, this book already feels less relevant. It seems like a lot of assumptions are made about programming and compilation, that probably make more sense in the Java world. Still, some solid ideas and worth the read."
          />
          <YouTubePost
            title="Scrum et al."
            id="IyNPeTn8fpo"
            description="I'm surprised how often people miss the point of scrum, they should watch this."
          />
          <BookPost
            title="The Phoenix Project"
            author="Gene Kim, Kevin Behr, and George Spafford"
            year="2013"
            comments="Very interesting."
          />
          <BookPost
            title="Continuous discovery habits"
            author="Teresa Torres"
            year="1999"
            comments="I thought I had discovery, design and delivery stuff figured out but Torres totally opened my eyes to new ways of thinking about it. Some of this book was not super relevant to me as a programmer, but worth reading and skipping a chapter here or there."
          />
          <BookPost
            title="Clean Code"
            author="Robert Martin"
            year="2008"
            comments="Bob Martin's long list of rules mostly aligned with my prior intuitions about programming. I've always advocated small functions and been wary of redundant, weasely naming. I feel slightly validated. Maybe a lot of it is common sense, but it's nice to have it all in one document that can be the basis of coding standards."
          />
          <BookPost
            title="Head First Design Patterns"
            author="Eric Freeman, Elisabeth Robson, Bert Bates, Kathy Sierra"
            year="2004"
            comments="Fun, palatable intro to OOP design patterns."
          />
          <BookPost
            title="The Pragmatic Programmer"
            author="Andy Hunt, Dave Thomas"
            year="1999"
            comments="An absolute must-read for any programmer."
          />
          <YouTubePost
            title="The Secret of Simple Code"
            id="F-JvvFlYcts"
            description="Love this clip from Eric Elliot discussing the importance of abstraction."
          />
        </Stack>
      </BasicPage>
    </PageLayout>
  );
};

export default IndexPage;
