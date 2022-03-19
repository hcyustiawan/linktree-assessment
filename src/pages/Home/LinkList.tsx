import { ClassicLink } from "../../components";
import { ShowLink } from "../../components/ShowLink";
import { useMockLinks } from "../../hooks/useMockLinks";

export const LinkList = () => {
  const links = useMockLinks();

  if (!links) {
    return null;
  }

  return (
    <>
      {links.map((link) => {
        const { type } = link;
        if (type === "classic") {
          return (
            <ClassicLink key={link.id} title={link.title} href={link.url} />
          );
        }
        if (type === "show") {
          return (
            <ShowLink key={link.id} title={link.title}>
              {link.data.map((show) => (
                <ShowLink.Detail {...show} />
              ))}
            </ShowLink>
          );
        }
        return null;
      })}
    </>
  );
};
