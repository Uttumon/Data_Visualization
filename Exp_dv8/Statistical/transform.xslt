<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="300">
      <xsl:for-each select="statistics/data/item">
        <rect x="{(position()-1) * 60 + 10}" 
              y="{300 - number(value)}" 
              width="40" 
              height="{number(value)}" 
              fill="blue" />
        <text x="{(position()-1) * 60 + 10}" 
              y="310" 
              font-size="12" 
              fill="black">
          <xsl:value-of select="category" />
        </text>
      </xsl:for-each>
    </svg>
  </xsl:template>
</xsl:stylesheet>
