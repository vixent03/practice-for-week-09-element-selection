const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
     const seeded = document.querySelectorAll(".seed")
       seeded.forEach(seed => {
        console.log(seed)
    })

    // 2. Get all seedless fruit elements
    // Your code here
    const seedless = document.querySelectorAll(".seedless")
    seedless.forEach(seedless => {
        console.log(seedless)
    })

    // 3. Get first seedless fruit element
    // Your code here
    console.log(seedless[0])

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
   console.log( document.querySelector("span"))

    // 5. Get all children of element "wrapper"
    // Your code here
   console.log( document.getElementById('#wrapper'))

    // 6. Get all odd number list items in the list
    // Your code here
    const odd = document.querySelectorAll(".odd")
    odd.forEach(odd =>{
        console.log(odd)
    })

    // 7. Get all even number list items in the list
    // Your code here
     // Your code here
     const even = document.querySelectorAll(".even")
     even.forEach(even =>{
         console.log(even)
     })

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
     // Your code here
     const anchor = document.querySelectorAll("a")
     anchor.forEach(a =>{
         console.log(a)
     })
    // 9. Get "Amazon" list element
    // Your code here

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
}

window.onload = select;
