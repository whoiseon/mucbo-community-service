import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";

export default function ViewPage() {
  const { viewPost } = useSelector((state: RootState) => state.post);

  console.log(viewPost);

  return (
    <div>
      { viewPost?.message.result.subject }
    </div>
  );
};
