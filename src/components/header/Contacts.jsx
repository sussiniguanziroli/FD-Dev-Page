import React from 'react'

const Contacts = () => {
  return (
    <>
    <section className='section-contacts'>

        <article className='new-icons'>
        <div class="wrapper">
         <div class="button">
            <div class="icon">
               <i class="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-google"></i>
            </div>
            <span>Gmail</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
         <div class="button">
            <div class="icon">
                <i class="fab fa-whatsapp"></i>
            </div>
            <span>WhatsApp</span>
         </div>
      </div>
        </article>

      
    </section>
    </>
  )
}

export default Contacts