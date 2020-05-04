import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from '../components/Reusable/Herosection'
//import Infoblock from '../components/Reusable/Infoblock'
import { graphql} from 'gatsby'
import Serviceinfo from "../components/Services/Serviceinfo"
//import Dualinfoblock from '../components/Reusable/Dualinfoblock'

const ServicesPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
    img={data.img.childImageSharp.fluid}
      title="Services"
      subtitle="A group of expertise are there for you"
      heroclass="services-background"
    />
    <Serviceinfo/>
  </Layout>
)

export const query =graphql`
{
  img: file(relativePath: { eq: "services2.png" }) {
        childImageSharp{
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`
export default ServicesPage
