import React from "react";
import Comment from "../../../images/icons/rec_comment_icon.png";

const Recommend = () => {
    return(
        <div className="recommend-box">
            <h2>
                <img src={ Comment } alt=""/>
                推荐评语
            </h2>
            <p className="rec-substain">
                工作认真刻苦，服务态度非常好，使经理在XXXXX得时候没有后顾之忧;工作踊跃，热心周到，有肯定得领导能力，专业技能业务程度优秀，业务程度也在不断提高，关心每一位合鑫人，是我们大家学习得榜样;能胜任本职工作，爱岗敬业、乐于助人，与同事相处融洽，服从整体支配，对本职工作兢兢业业，锐意进取，起榜样作用，为我们树立良好形象
            </p>
        </div>
    )
}

export default Recommend;