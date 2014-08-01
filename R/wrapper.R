#'render rmarkdown with \code{rmarkdown::render}
#'@export
#'@import rmarkdown
rendermd = function(text){
  head = ("---\noutput: html_document\n---")
  text = paste(head,text,sep='\n')
  writeLines(text, con="input.Rmd");
  render(input = "input.Rmd",output_options=list(self_contained=TRUE),output_file="output.html")
  invisible()
}

#'make chart
#'@export
#'@return save output to output.html under the current directory
#'@import rCharts 
make_chart = rCharts::make_chart

#'use rmarkdown to render R script into html
#'@export
#'@return save output to output.html under the current directory
#'@import rmarkdown
evaluateR = function(text){
  writeLines(text, con = "input.R")
  render(input = "input.R",output_options=list(self_contained=TRUE),output_file="output.html")
  invisible()
}