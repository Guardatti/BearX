import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { ErrorStyled } from './PageNotFoundStyled'

const PageNoutFound = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <ErrorStyled>This page could not be found</ErrorStyled>
  )
}

export default PageNoutFound
