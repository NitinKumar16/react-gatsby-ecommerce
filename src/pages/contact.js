import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from '../components/Reusable/Herosection'
import Infoblock from '../components/Reusable/Infoblock'
import { graphql} from 'gatsby'
import Dualinfoblock from '../components/Reusable/Dualinfoblock'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
    img={data.img.childImageSharp.fluid}
      title="Contact us"
      subtitle="24 Hrs assistance provided!"
      heroclass="hero-background"
    />
    <Infoblock heading="Contact us"/>
    <Dualinfoblock
     heading="Our team"/>
  </Layout>
)

export const query =graphql`
{
  img: file(relativePath: { eq: "contact7.png" }) {
        childImageSharp{
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`
export default IndexPage
