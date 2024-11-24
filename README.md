FIX 

<!-- 

- "awkward" not:(:hover) transition on the inputs. They have to disappear simultaneously ;
- Start the JS part;
 -->

 SOLVED

 <!-- 
 
 - the opacity property was missing on the 

 form input[type="submit"] {
    transition-property: background-color, OPACITY; //here//
}
 
  -->

  