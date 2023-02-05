import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Link } from "react-router-dom";
export default function BlogDetails() {
  const forBelow416 = useMediaQuery("(max-width:416px)");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 160 && !isScrolling) {
      setIsScrolling(true);
    } else if (window.pageYOffset <= 160 && isScrolling) {
      setIsScrolling(false);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          boxShadow: isScrolling ? "0px 0px 20px rgba(0, 0, 0, 0.08)" : "none",
          position: "fixed",
          top: 0,
          width: "100%",
          background: "white",
        }}
      >
        <Container
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/blog">
            <ArrowBackIosNewRoundedIcon />
          </Link>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/">
              <img src="Assets/Images/Logo/Logo-black.png" />
            </Link>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box sx={{ mt: 14 }}>
          {parse(
            `<p class=\"paragraph\">At the very first age, JavaScript was called LiveScript. An engineer named Brendan Eich has created JavaScript in 1995. There was a little confusion about the name with Java and JavaScript. After several months Microsoft released JScript with Internet Explorer 3. After that Netscape submitted JavaScript to Ecma International. In 1999 ECMAScript edition 3 launched and it has stayed pretty much stable ever since.</p><p>&nbsp;</p><p  class=\"paragraph\"><strong class=\"strong\">An Overview of JavaScript:</strong></p><p  class=\"paragraph\">JavaScript is a dynamic language with many type, operators, objects, and methods. JavaScripts&rsquo; syntax is inspired by Java And C language. A programmer can work with object prototypes, instead of classes and that&rsquo;s why JavaScript supports OOP. And Lastly JavaScript also supports functional programming. JavaScripts&rsquo; type diagram looks more like this:</p><ol><li>Number</li><li>String</li><li>Boolean</li><li>Object</li><li>Symbol</li><li>Undefined</li><li>Null.</li></ol><p  class=\"paragraph\"><strong class=\"strong\">Variable:</strong></p><p  class=\"paragraph\">In JavaScript, we can declare a variable by using these three keywords.</p>    <ol><li>let</li><li>var</li><li>const</li></ol><p  class=\"paragraph\">When you using the&nbsp;<strong class=\"strong\">&lsquo;&rsquo;let&rsquo;&rsquo;</strong>&nbsp;keyword it allows you to declare block-level variables. And the value of this variable can be changed.</p><p  class=\"paragraph\"><strong class=\"strong\">&ldquo;const&rdquo;</strong>&nbsp;allows you to declare variables you cant change. The variable is available from the block it is declared in.</p><p  class=\"paragraph\">And now the most commonly used variable is&nbsp;<strong class=\"strong\">&ldquo;var&rdquo;.&nbsp;</strong>This variable has no restrictions like the other two. This variable is available from the function where it is declared in.</p> <p  class=\"paragraph\"><strong class=\"strong\">Operators:</strong></p> <p  class=\"paragraph\"><strong class=\"strong\">&ldquo;+, -, *, /&rdquo;&nbsp;</strong>this is are JavaScripts&rsquo; numerical operators. We use&nbsp;<strong class=\"strong\">&lsquo;&rsquo;=&rsquo;&rsquo;&nbsp;</strong>this for assigning values. In srting and number if we need to compare between something we can use&nbsp;<strong class=\"strong\">&ldquo;&lt;, &gt;, &lt;=, &gt;=&rdquo;.&nbsp;</strong>Last but not least&nbsp;<strong class=\"strong\">&ldquo;!= !==&rdquo;&nbsp;</strong>this is are also some operators in JavaScript.</p><p  class=\"paragraph\"><strong class=\"strong\">Control Structures:</strong></p> <p  class=\"paragraph\">If you have any idea about the control structures of C language, then you will already know about the control structures of JavaScript also. Because there are some similarities between C and JavaScript.</p> <p  class=\"paragraph\"><strong class=\"strong\">&ldquo;if-else&rdquo;&nbsp;</strong>conditionals can be used in JavaScript. You want to print a age message and you set if age is less than 10, print a message &ldquo;child&rdquo; message, if not, but age is less than 20, print a &ldquo;adult&rdquo; message, otherwise a &ldquo;old&rdquo;:</p> <img src=\"Assets/Images/Blog/if-else.png\" style=\"max-width:462px; width:100%\"><p  class=\"paragraph\">JavaScript has&nbsp;<strong class=\"strong\">&ldquo;while-do while&rdquo;&nbsp;</strong>loop. When you want a basic looping then use the first one, otherwise use the second one.</p>    <img src=\"Assets/Images/Blog/while-loop.png\" style=\"max-width:462px; width:100%\"> <p  class=\"paragraph\">this code will run the loop over and over again. when the value of i=10 then it will stop.</p> <img src=\"Assets/Images/Blog/loop.png\" style=\"max-width:462px; width:100%\">    <p  class=\"paragraph\">In JavaScript, you can use the&nbsp;<strong class=\"strong\">&ldquo;for&rdquo;&nbsp;</strong>loop also. and again this for loop are similar to C language.</p>    <img src=\"Assets/Images/Blog/for-loop.png\" style=\"max-width:462px; width:100%\">    <p  class=\"paragraph\">JavaScript has Switch and Break statement.</p>    <p  class=\"paragraph\"><strong class=\"strong\">String:</strong></p>    <p  class=\"paragraph\">When you want to store data in text form, then use&nbsp;<strong class=\"strong\">&ldquo;String&rdquo;</strong>. Like array we can use the length property to find the length of a string. String literals can be specified using single or double-quotes.</p>    <p  class=\"paragraph\">Some Useful method is String:</p>    <p  class=\"paragraph\"><strong class=\"strong\">&lsquo;charAt&rsquo;</strong>&nbsp;method is used to access an individual character in a string.</p>    <p  class=\"paragraph\"><strong class=\"strong\">&ldquo;concat</strong>&rdquo; method is used to combine the text between two string.</p>    <p  class=\"paragraph\"><strong class=\"strong\">&ldquo;indexOf</strong>&rdquo; method is used to return the index within the string.</p>    <p  class=\"paragraph\"><strong class=\"strong\">&ldquo;endsWith</strong>&rdquo; method is used to find where the string ends.</p>    <p  class=\"paragraph\"><strong class=\"strong\">&ldquo;slice</strong>&rdquo; method is used to Extracts a section of a string and returns a new string.</p>    <p  class=\"paragraph\"><strong class=\"strong\">&ldquo;toUppercase</strong>&rdquo; method is used to Returns the calling string value converted to uppercase.</p>    <p  class=\"paragraph\"><strong class=\"strong\">Number:</strong></p>    <p  class=\"paragraph\">JavaScript numbers can be written with or without decimals. In other programming languages, there are different types of numbers, like integers, short, long, floating-point, etc. But JavaScript does not define different types of numbers. Following the international IEEE 754 standard, JavaScript numbers are always stored as ouble-precision floating-point numbers. JavaScript number are always 64-bit floating-point.</p>    <p  class=\"paragraph\">Some Static method of JavaScript Number</p>    <p  class=\"paragraph\"><strong class=\"strong\">&ldquo;isNaN&rdquo;&nbsp;</strong>means is Not a Number. Determine whether the passed value is NaN.</p>    <p  class=\"paragraph\">The &ldquo;<strong class=\"strong\">parseFloat</strong>&rdquo; function parses a string and returns a floating-point number. and &ldquo;<strong class=\"strong\">parseInt</strong>&rdquo; function parses a string and returns an interger point number.</p>    <p  class=\"paragraph\"><strong class=\"strong\">Math:</strong></p>    <p  class=\"paragraph\"><strong class=\"strong\">&ldquo;math&rdquo;&nbsp;</strong>object allows you to perform mathematical tasks. It works with a number, not with BigInt.</p>    <p  class=\"paragraph\">It&rsquo;s not a constructor. All properties and methods are static in a math object.</p>    <p  class=\"paragraph\">Some important methods are,</p>    <p  class=\"paragraph\"><strong class=\"strong\">math.floor&nbsp;</strong>is returning the largest integer less than or equal number.</p>    <p  class=\"paragraph\"><strong class=\"strong\">math.ceil&nbsp;</strong>is returning the largest integer greater than or equal number.</p>    <p  class=\"paragraph\"><strong class=\"strong\">math.random&nbsp;</strong>is the returning random number.</p>    <p  class=\"paragraph\"><strong class=\"strong\">math.round&nbsp;</strong>is the returning the nearest number of an integer.</p>    <p  class=\"paragraph\"><strong class=\"strong\">math.sqrt&nbsp;</strong>is the returning square root of a number.</p> <p  class=\"paragraph\"><strong class=\"strong\">math.min&nbsp;</strong>is the returning smallest number of zero and&nbsp;<strong class=\"strong\">math.max&nbsp;</strong>is the returning biggest number of zero.</p>`
          )}
        </Box>
      </Container>
    </Box>
  );
}
