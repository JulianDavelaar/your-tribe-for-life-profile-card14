<script>
    let { data } = $props();
</script>


<section id="home">
   <header>
        <nav class="nav-head">
            <span>J.</span>
            <div class="wrapper">
                <a href="#home">Home</a>
                <a href="#about">Over Mij</a>
                <a href="">
                    <img src="/svg/icon-menu.svg">
                </a>
            </div>
        </nav>
    </header>

    <div class="intro">
        <p>Profielkaart - FDND Sprint 13</p>
        <h1>JUUL</h1>
        <p>Fontend Developer & Entrepeneur</p>
    </div>

    <a href="mailto:jpdavelaar@gmail.com">
        <img src="/svg/icon-mail.svg" alt="mail">
    </a>
</section>


<section id="about">
    <div class="overkop">
        <div class="kop">
            <h2>Over Mij</h2>
            <p>Student Frontend Design & Development aan de Hogeschool van Amsterdam.</p>
        </div>
        

        <div class="grid">
            <article>
                <p>01</p>
                <p>Frontend</p>
                <p>HTML, CSS, JavaScript, Svelte</p>
            </article>
        
            <article>
                <p>02</p>
                <p>UI/UX Design</p>
                <p>Websites, Apps, Products</p>
            </article>

            <article>
                <p>03</p>
                <p>API's & Data</p>
                <p>Dynamische data koppelen</p>
            </article>

            <article>
                <p>04</p>
                <p>team{data.person.team_s13}</p>
                <p>Jadon, Julian, Lynn</p>
            </article>
        </div>
    </div>

    <h3>Wat weetjes over mij</h3>
        <dl>
            <dt>Favoriete film</dt>
            <dd>{data.person.fav_movie}</dd>

            <dt>Favoriete muziek genre</dt>
            <dd>{data.person.fav_music_genre}</dd>

            <dt>Woonplaats</dt>
            <dd>{data.person.residency}</dd>
        </dl>
</section>

<style>

    #home {
        background-color: var(--antraciet);
        min-height: 100svh;
        padding: 15px 25px;
        
    }

    #about {
        padding: 15px 25px;

    }

    .nav-head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .intro {
        display: flex;
        flex-direction: column;
        padding: 11rem 0;

        @media( width > 500px) {
        align-items: center;
        }
    }

    .wrapper {
        display: flex;
        gap: 2rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(150px, 300px));
        gap: 1rem;
        justify-content: end;

    }

       @media (width > 600px) {
            .overkop {
            display: flex;
            gap: 3rem;
            align-items: start;
        }
    }

    a {
        text-decoration: none;
        color: var(--wit);
    }

    img {
        width: 1.5rem;
    }

    span {
		font-size: clamp(1.4rem, 9vw, 2.5rem);	
    }

    article {
        background-color: var(--antraciet);
        border:solid 2px rgb(from var(--grey) r g b / 30%);
        padding: .5rem;
    }
</style>
