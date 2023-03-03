export default function Publication() {
    return (
        <article class="card-info">
            <article class="card-info-image">
                <img src="{{picture}}" alt="art-image" />
            </article>
            <article class="card-info-text">
                <h2>Title: {{ title }}</h2>
                <h3>Certificate of authenticity: {{ certificate }}</h3>
                <a href="/artGallerys/{{_id}}/details" class="details-btn">Details</a>
            </article>
        </article>

    )
}