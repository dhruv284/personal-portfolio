import {Col} from "react-bootstrap";

export const ProjectCard=({title,description,imgUrl,link})=>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx project-image" onClick={() => link && window.open(link, "_blank")}
        style={{ cursor: link ? "pointer" : "default" }}>
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}