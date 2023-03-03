import '../css/details.css'
import '../css/site.css'

export default function Details() {
    return (
        <section id="details-page">
        <h1>Details</h1>
        <article class="details-card">

            <article class="details-card-text">
                <h2>Title:<br/> </h2>
                {/* <h3>Author: </h3> */}
                <h3>Description:</h3>
                {/* <h3>Certificate of authenticity: </h3> */}

                {/* <!-- If there is no registered user, do not display buttons--> */}
                {/* {{#if isAuthenticated}} */}
                <div class="buttons">
                    {/* <!-- Only for registered user and author of the publication --> */}
                    {/* {{#if isOwner}} */}
                    <a href="/artGallerys/{{publication._id}}/edit" class="btn-edit">Edit</a>
                    <a href="/artGallerys/{{publication._id}}/delete" class="btn-delete">Delete</a>
                    {/* {{else}}
                    {{#if isWished}} */}
                    {/* <!-- logged in user who has already shared the publication--> */}
                    <p class="shared-pub">You already shared this publication</p>

                    {/* {{else}} */}
                    {/* <!-- logged in user who has not yet shared the publication--> */}
                    <a href="/artGallerys/{{publication._id}}/shared" class="btn-share">Share publication</a>
                    {/* {{/if}}
                    {{/if}}
                    {{/if}} */}
                </div>

            </article>

            <article class="details-card-image">
                <img src="{{publication.picture}}" alt="art-image2" />
            </article>

        </article>
    </section>
        
    )
}