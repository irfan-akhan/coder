
import { PersonSharp } from "@material-ui/icons";
import blog from "../styles/Blog.module.css";
export default function MediaCard() {
  return (
    <div className={blog.Card}>
      <img src="/coder/assets/images/car.jpg" alt="" />
      <div className={blog.cardBody}>
        <div className={blog.author}>
          <p>
            <PersonSharp />
            Batman
          </p>
          <p>01:54:12</p>
        </div>
        <h3>This is the Way</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          accusamus ea error ipsa soluta commodi repellendus exercitationem
          assumenda ad dolore.
        </p>
        <button>Read More..</button>
      </div>
    </div>
  );
}
