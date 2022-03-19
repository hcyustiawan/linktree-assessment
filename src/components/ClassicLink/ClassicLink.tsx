import { Link, LinkProps, useStyleConfig } from "@chakra-ui/react";

interface ClassicLinkProps extends LinkProps {
  title: string;
}

export const ClassicLink = ({
  isExternal = true,
  title,
  ...props
}: ClassicLinkProps) => {
  const sx = useStyleConfig("LinkStyle");
  return (
    <Link
      {...props}
      sx={sx}
      isExternal={isExternal}
      width="100%"
      height={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={6}
    >
      {title}
    </Link>
  );
};
