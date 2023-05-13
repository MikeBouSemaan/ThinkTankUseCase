import { Col } from "react-bootstrap"

export const WeareCard = ({title, description, imgUrl}) => {

    return (
        <Col xs={12} sm={6} md={4}>
          <div className="country-imgbx">
            <img src={imgUrl} />
            <div className="country-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </Col>
      )

}