import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from '../components/Reusable/Herosection'
import Infoblock from '../components/Reusable/Infoblock'
import { graphql} from 'gatsby'
import Dualinfoblock from '../components/Reusable/Dualinfoblock'
import Teamphotosection from '../components/About/Teamphotosection'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
    img={data.img.childImageSharp.fluid}
      title="About learncodeonline"
      heroclass="about-background"
    />
    <Dualinfoblock heading="Message from the CEO"/>
    <Infoblock heading="Our vision"/>
    <Teamphotosection/>
  </Layout>
)

export const query =graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
        childImageSharp{
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`
export default AboutPage
