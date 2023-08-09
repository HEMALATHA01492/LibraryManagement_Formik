import React from 'react'


function Home() {
    return (
        <div className='container-fluid'>
            <div className='row bg-success rounded'>
                <div className='col-lg-4 col-sm-12 p-3'>
                    <img className='img-fluid' src='https://th.bing.com/th/id/R.c5b2747be236f15c6beead918a0062ef?rik=3xAQFsq44DFsfQ&riu=http%3a%2f%2fimg02.deviantart.net%2febc2%2fi%2f2013%2f159%2f4%2f7%2fpile_of_books_on_a_black_background_by_macinivnw-d68c8a1.jpg&ehk=twfYMiI8Fo2XtATOuCGIreByTSdFFvJ86UsE9LlOQR0%3d&risl=&pid=ImgRaw&r=0' alt='book' width="80%" />
                </div>
                <div className='col-lg-8 col-sm-12 p-5 text-start'>
                    <p className='text-white p-5'><q className='fw-bold fs-1'>I have always imagined that Paradise will be a kind of a Library</q>
                    <hr></hr>
                    <div className='mt-5 p-2'><h1>WELCOME to  the Library</h1></div>
                    

                    </p>


                </div>
            </div>            
        </div>
    )
}

export default Home;