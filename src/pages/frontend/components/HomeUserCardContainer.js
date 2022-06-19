import React, { useRef } from 'react'
import { HomeUserCard, HomeUserCardLoading } from './HomeUserCard'


function HomeUserCardContainer(props) {
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        // ref.current.scrollIntoView({behavior:"smooth"})
        ref.current.scrollLeft += scrollOffset;
      
        // console.log(scrollOffset)
    }
    const specialistData = props.data
    return (
        <div>
            {specialistData &&
                <>
                    <div className="team"
                        ref={ref}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flex: "1 1 auto",
                            scrollBehavior: "smooth",
                            width: "88vw",
                            marginLeft: "auto",
                            marginRight: "auto",
                            // overflowX: "scroll"
                        }}
                    >

                        {specialistData && specialistData.map((data, key) => {
                            return (
                                // <p>{specialistData[0].name}</p>
                                <HomeUserCard key={key} data={data} />
                            )
                        })}
                        {/* <HomeUserCard /> */}
                        {/* <HomeUserCard />
                <HomeUserCard />
                <HomeUserCard />
                <HomeUserCard />
                <HomeUserCard />
                <HomeUserCard />
                <HomeUserCard />
                <HomeUserCard />
                <HomeUserCard /> */}

                    </div>

                    <button className='btn slide-arrow-left'

                        onClick={() => scroll(-400)}
                        onMouseOver={() => scroll(-400)}
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.669 3.257a1 1 0 0 1 .152 1.314l-.078.098L3.045 11H23.2a1 1 0 0 1 .117 1.993L23.2 13H3.045l5.698 6.331a1 1 0 0 1-1.397 1.426l-.09-.088-7.241-8.05-.066-.094-.055-.102-.034-.081-.032-.106A1 1 0 0 1-.2 12l.007-.12.022-.121.036-.114.05-.11.064-.106.078-.098 7.2-8a1 1 0 0 1 1.412-.074z"></path></svg>
                    </button>
                    <button className='btn slide-arrow-right'
                        onClick={() => scroll(400)}
                        onMouseOver={() => scroll(400)}
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.331 3.257a1 1 0 0 1 1.323-.014l.09.088 7.241 8.05.066.094.055.102.034.081.032.106A1 1 0 0 1 24.2 12l-.007.12-.022.121-.036.114-.05.11-.064.106-.058.075a.992.992 0 0 1-.094.097l.081-.084-.007.01-7.2 8-.09.088a1 1 0 0 1-1.474-1.328l.078-.098L20.954 13H.8l-.117-.007a1 1 0 0 1 0-1.986L.8 11h20.154l-5.697-6.331-.078-.098a1 1 0 0 1 .152-1.314z"></path></svg>
                    </button>
                </>
            }
        </div>
    )
}
function HomeUserCardContainerLoading(props) {
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        // ref.current.scrollIntoView({behavior:"smooth"})
        ref.current.scrollLeft += scrollOffset;

        console.log(scrollOffset)
      
        // console.log(scrollOffset)
    }
    const specialistData = props.data

    return (
        <div>
            <div className="team"
                ref={ref}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: "1 1 auto",
                    scrollBehavior: "smooth",
                    width: "88vw",
                    marginLeft: "auto",
                    marginRight: "auto",
                    // overflowX: "scroll"
                }}
            >



                <HomeUserCardLoading />
                <HomeUserCardLoading />
                <HomeUserCardLoading />
                <HomeUserCardLoading />
                <HomeUserCardLoading />
                <HomeUserCardLoading />
                <HomeUserCardLoading />
                <HomeUserCardLoading />
                <HomeUserCardLoading />
                <HomeUserCardLoading />
                <HomeUserCardLoading />
                <HomeUserCardLoading />



            </div>
            <button className='btn slide-arrow-left'

                onClick={() => scroll(-400)}
                onMouseOver={() => scroll(-400)}
            >

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.669 3.257a1 1 0 0 1 .152 1.314l-.078.098L3.045 11H23.2a1 1 0 0 1 .117 1.993L23.2 13H3.045l5.698 6.331a1 1 0 0 1-1.397 1.426l-.09-.088-7.241-8.05-.066-.094-.055-.102-.034-.081-.032-.106A1 1 0 0 1-.2 12l.007-.12.022-.121.036-.114.05-.11.064-.106.078-.098 7.2-8a1 1 0 0 1 1.412-.074z"></path></svg>
            </button>
            <button className='btn slide-arrow-right'
                onClick={() => scroll(400)}
                onMouseOver={() => scroll(400)}
            >

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.331 3.257a1 1 0 0 1 1.323-.014l.09.088 7.241 8.05.066.094.055.102.034.081.032.106A1 1 0 0 1 24.2 12l-.007.12-.022.121-.036.114-.05.11-.064.106-.058.075a.992.992 0 0 1-.094.097l.081-.084-.007.01-7.2 8-.09.088a1 1 0 0 1-1.474-1.328l.078-.098L20.954 13H.8l-.117-.007a1 1 0 0 1 0-1.986L.8 11h20.154l-5.697-6.331-.078-.098a1 1 0 0 1 .152-1.314z"></path></svg>
            </button>
        </div>
    )
}

export { HomeUserCardContainerLoading, HomeUserCardContainer } 