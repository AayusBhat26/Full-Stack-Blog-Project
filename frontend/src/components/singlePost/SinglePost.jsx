import './singlepost.css'
export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-trash"></i>
            <i className="singlePostIcon fa-light fa-pen-to-square"></i>
            {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
          </div>
        </h1>
        <img
          src={require("../images/javascript.png")}
          alt=""
          className="singlePostImg"
        />
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Aayush</b>
          </span>
          <span className="singlePostDate">
            Date: <b>1 Hour Ago</b>
          </span>
        </div>
        <p className='singlePostDetails'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta excepturi dolores quo deleniti placeat! Eligendi itaque, nihil fugiat tempora reprehenderit, natus odit, iure incidunt pariatur eaque consectetur veritatis modi dignissimos accusantium voluptates rerum harum omnis obcaecati saepe cupiditate molestiae praesentium. Nisi explicabo itaque quas, quia, vel optio magnam exercitationem aliquam dicta consequuntur delectus perspiciatis cumque eligendi? Labore magni eaque nesciunt reiciendis iste veniam eius praesentium maxime temporibus quam! Dolor quae cupiditate quas cumque, fuga eligendi beatae voluptate adipisci neque obcaecati ab exercitationem voluptas voluptates quod aspernatur deserunt sed? Dolores possimus repellat modi quis. Nisi quisquam obcaecati, nostrum quod nulla laborum iusto quis ab impedit, perspiciatis omnis magnam sequi officia suscipit! Culpa voluptates explicabo, vitae esse illum sit corrupti aut in harum quis perspiciatis consequatur nam a facilis reiciendis dignissimos accusamus nihil odio? Asperiores ex quas quaerat voluptates ullam sunt? Libero architecto, omnis dolor, eveniet ut quod error totam est inventore quis quidem! Laboriosam sequi quisquam veritatis, sint, odit numquam blanditiis voluptatem neque tempora eius ducimus itaque expedita totam iste optio fuga eum assumenda consequatur aspernatur magnam? Officia ipsam quos accusamus in temporibus sapiente qui doloribus ad beatae cupiditate! Ratione dicta sunt modi commodi quo, earum voluptatem libero ullam porro sequi, eius aperiam? Similique iste voluptatibus minus tenetur quo nemo numquam distinctio alias. Quod necessitatibus eos blanditiis, ipsum nobis minima ullam temporibus repellendus distinctio sit perferendis perspiciatis nemo ut. Quibusdam qui dolores aliquid! Laborum asperiores molestiae magnam illo dicta cumque atque dignissimos, aliquid officia voluptatum quas, ducimus modi eius aut enim voluptatem recusandae corrupti numquam quo eos voluptas sit mollitia quae? Modi veritatis dignissimos nisi magnam dolore praesentium, quisquam iste quis architecto aliquam cumque quod adipisci repellendus doloribus perspiciatis debitis omnis dolor laborum libero? Laborum enim vero placeat praesentium itaque reiciendis aspernatur veniam distinctio amet, architecto sint qui eveniet fuga at voluptas, magni atque rerum sequi officiis accusantium aut velit iste culpa sapiente! Magni ipsa nisi deleniti vero officia numquam modi mollitia alias omnis consectetur eos veritatis minus eum, veniam corporis ab earum vitae sequi tempora sint ut. Illum, vitae neque? Architecto libero eos neque enim blanditiis qui a molestiae, atque doloremque sed soluta labore sunt repellat laboriosam aspernatur pariatur itaque? Nam, nihil fuga? Repudiandae sed culpa saepe illum cupiditate totam perferendis corrupti placeat voluptatem fuga neque magnam perspiciatis a assumenda voluptate provident quae, deserunt temporibus blanditiis optio ipsa. Aliquid pariatur at minus quisquam enim dignissimos beatae exercitationem fuga rem sapiente, vel amet voluptates iusto ipsam voluptas! Rerum quaerat necessitatibus, quisquam delectus, at quod similique quos molestiae dolore officia perferendis repellendus ipsa repellat? Commodi, laboriosam! Assumenda dolorum officiis ad ducimus enim nesciunt molestiae minus non asperiores, quos animi, tempora nobis qui iste optio, maiores laborum quasi ipsum blanditiis facere? Eligendi necessitatibus, suscipit corporis dolores laborum modi itaque et quod iusto labore consequuntur atque. Perferendis rem cumque, facere, corrupti magni aliquid repellat illo aut eligendi magnam esse dolores optio accusantium laboriosam voluptatibus, quo dolorum ducimus? Totam ipsam praesentium minus soluta consectetur quidem, voluptas enim inventore, dolores, accusamus culpa magni nihil! Perspiciatis, sit.</p>
      </div>
    </div>
  );
}
