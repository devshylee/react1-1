import Comment from "./Comment";

export default function CommentList(props){
    return(
        <div>
            <Comment name="홍길동1" Comment="안녕하세요!" />
            <Comment name="홍길동2" Comment="안녕하세요!!" />
            <Comment name="홍길동3" Comment="안녕하세요!!!" />
        </div>
    )
}