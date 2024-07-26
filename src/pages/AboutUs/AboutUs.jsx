import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { ContainerAboutUs, ContainerMission, ContainerText, ContainerTextMission, ContainerTextValues, ContainerTextVision, ContainerTitle, ContainerValues, ContainerVision, ContainerVisionText } from './AboutsUsStyled'

const AboutUs = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <ContainerAboutUs>
      <ContainerTitle>
        <h2>We are BearX</h2>
      </ContainerTitle>
      <ContainerText>
        <p>We are a company founded in 2024. Our first invested capital consisted of effort, work and desire to improve ourselves, with the hope of creating a solid structure that would allow us to face the different challenges that lay ahead.</p>
        <p>We started offering technical service for computers from the garage of a house. As time went by, we incorporated products for commercialization, which led us to expand our sales facilities, managing to open our first commercial premises.</p>
        <p>Supported by strategic alliances with the main technological brands, we became a benchmark in the market, incorporating variety into our offer with the aim of conveying to our clients the excellence, quality, innovation and cutting-edge that we demand of ourselves in every step we take.</p>
        <p>Today we are official partners of more than 20 international brands. We have a constantly growing team, a website with more than 20 product categories for sale and multiple pickup points distributed throughout the country.</p>
        <p>We are what you want, when you want, where you want. We are BearX</p>
      </ContainerText>
      <ContainerMission>
        <h3>Our mission</h3>
      </ContainerMission>
      <ContainerTextMission>
        <p>Offer technological products that accompany and satisfy the needs of our clients, accompanying them with the best care, advice and after-sales service. Also providing the possibility that anyone throughout the national territory can purchase our products from the comfort of their home.</p>
      </ContainerTextMission>
      <ContainerVision>
        <h3>Our vision</h3>
      </ContainerVision>
      <ContainerTextVision>
        <p>To be the leading and reference company, at the national level, in the marketing and distribution of technological equipment.</p>
      </ContainerTextVision>
      <ContainerValues>
        <h3>Our values</h3>
      </ContainerValues>
      <ContainerTextValues>
        <p>Innovation; Quality; Customer orientation; Ethics and responsibility; Teamwork; Adaptability; Continuous learning; Efficiency, speed and resolution; Passion.</p>
      </ContainerTextValues>
    </ContainerAboutUs>
  )
}

export default AboutUs
