/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { PAGE_MARGIN } from "../config/theme"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      bg: "primary",
    }}
  >
    <div
      sx={{
        m: `0 auto`,
        px: PAGE_MARGIN,
        py: 3,
        maxWidth: 960,
      }}
    >
      <Styled.h1>
        <Link
          to="/"
          sx={{
            color: "background",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.25rem",
          }}
        >
          {siteTitle}
        </Link>
      </Styled.h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
