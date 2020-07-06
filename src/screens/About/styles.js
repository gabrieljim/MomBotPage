import styled from "styled-components";

/***************** VARIANTS *****************/



/**************** COMPONENTS ****************/

export const About = styled.div`
	& h1 {
		margin-bottom: 20px;
	}
`

export const Info = styled.div`
  width: 80%;
  margin: auto;
  line-height: 33px;
  margin-bottom: 10px;

	& p {
		font-size: 22px;
	}
	
	@media screen and (max-width: 438px) {
		& p {
			text-align: justify;
		}

		& h1 {
			line-height: 40px;
		}
	}
`

export const MomTitle = styled.span`
  cursor: default;
  transition: color 0.2s;
  color: #f1c40f;
`
