import React from 'react'
import { useEffect, useState } from 'react'
import { BsArrowUpCircle } from "react-icons/bs"


const ScrollToTop = () => {
    const [scrollToTopButton, setScrollToTopButton ] = useState(false)

    // Show button when user scrolls 100px or more
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setScrollToTopButton(true)
            } else {
                setScrollToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div>
        {scrollToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "50px",
                width: "50px",
                fontSize: "40px",
                color: "#d1d5db"
            }} onClick={scrollUp}>
                <BsArrowUpCircle />
            </button>
        )}
    </div>
  )
}

export default ScrollToTop