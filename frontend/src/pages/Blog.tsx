import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { CompleteBlog } from "../components/CompleteBlog";

import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";


export const Blog = () => {
   const {id}=useParams();
  const { loading, oneblog } = useBlog({ id:id||"" });
  

  if (loading || !oneblog) {
    return <div>
      <Appbar username="vishal" />

      <div className="h-screen flex flex-col justify-center">

        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    </div>
  }
  return (
    <div>
      <div>
        <CompleteBlog oneblog={oneblog}/>
       
      </div>
    </div>
  )
}
