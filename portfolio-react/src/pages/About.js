import Body from "../components/Body";

const About = ({ props }) => {
  return (
    <>
      <Body>
        <div className="gap-10 w-2/3">
          <div className="p-2">Hello, my name is</div>
          <div className="font-bold text-7xl pb-5">Nathan Kagi</div>
          <div className="font-light text-xl text-opacity-20 pb-3">
            Electrical Engineer and Software Engineer in the making.
          </div>
          <div>
            I develop nuclear physics logging tools for the mining industry. I
            have a love for minimal and yet thoughtful implementation of
            technology using a fast-paced, iterative approach to research and
            development. Currently pioneering the next-gen tools for mining at{" "}
            <a href="https://www.orica.com/" className="font-bold">
              Orica
            </a>{" "}
            as part of their Digital Solutions vertical.
          </div>
        </div>
      </Body>
    </>
  );
};

export default About;
