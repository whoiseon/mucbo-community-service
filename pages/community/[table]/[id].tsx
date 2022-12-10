import {NextPage} from "next";
import {useRouter} from "next/router";

interface IProps {
  isMobile: boolean,
  title: string
}

const ViewPage: NextPage<IProps> = () => {
  const router = useRouter();

  return (
    <div>
      { router.query.id }
    </div>
  );
};

export default ViewPage;

// login https://cheatdot.com/api/v1/api.php
