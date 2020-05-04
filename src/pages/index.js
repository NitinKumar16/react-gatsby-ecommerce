import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from '../components/Reusable/Herosection'
import Infoblock from '../components/Reusable/Infoblock'
import { graphql} from 'gatsby'
import Dualinfoblock from '../components/Reusable/Dualinfoblock'
import Coursecart from '../components/Cart/Coursecart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection
    img={data.img.childImageSharp.fluid}
      title="I WRITE CODE"
      subtitle="Learncodeonline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us"/>
    <Coursecart mycources={data.mycources} /> 
    <Dualinfoblock
     heading="Our team"/>
  </Layout>
)

export const query =graphql`
{
  img: file(relativePath: { eq: "heromain15.png" }) {
        childImageSharp{
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      mycources:allContentfulCources
      {
        edges{
          node{
            id
            title
            price
            category
            description{
              description
            }
            image{
              fixed(width:200,height:120){
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
          }
        }
      }
  }
`
export default IndexPage
