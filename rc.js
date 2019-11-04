var s1_rows=[
        {
            Ingredient:"Chicken"
            Pos:"RA: S1"
            Price:150
        },
        {
            Ingredient:"Salt"
            Pos:"RA: S2"
            Price:120
        } ,
        {
            Ingredient:"Red Chili Powder"
            Pos:"RA: S3"
            Price:50
        } ,
        {
            Ingredient:"Garam Masala"
            Pos:"RA: S4"
            Price:50
        } ,
        {
            Ingredient:"Yogurt"
            Pos:"RA: S5"
            Price:100
        } ,
        {
            Ingredient:"Butter"
            Pos:"RB: S1"
            Price:50
        } ,
        {
            Ingredient:"Cashew Nuts"
            Pos:"RB: S2"
            Price:200
        }
    ]


    var s2_rows=[
        {
            Ingredient:"Paneer"
            Pos:"RB: S3"
            Price:150
        },
        {
            Ingredient:"Salt"
            Pos:"RA: S2"
            Price:120
        } ,
        {
            Ingredient:"Red Chili Powder"
            Pos:"RA: S3"
            Price:50
        } ,
        {
            Ingredient:"Garam Masala"
            Pos:"RA: S4"
            Price:50
        } ,
        {
            Ingredient:"Yogurt"
            Pos:"RA: S5"
            Price:100
        } ,
        {
            Ingredient:"Butter"
            Pos:"RB: S1"
            Price:50
        } ,
        {
            Ingredient:"Cashew Nuts"
            Pos:"RB: S2"
            Price:200
        }
    ]

    var s3_rows=[
        {
            Ingredient:"Chicken"
            Pos:"RA: S1"
            Price:150
        },
        {
            Ingredient:"Salt"
            Pos:"RA: S2"
            Price:120
        } ,
        {
            Ingredient:"Lemon Juice"
            Pos:"RB: S3"
            Price:50
        } ,
        {
            Ingredient:"Garam Masala"
            Pos:"RA: S4"
            Price:50
        } ,
        {
            Ingredient:"Yogurt"
            Pos:"RA: S5"
            Price:100
        } ,
        {
            Ingredient:"Butter"
            Pos:"RB: S1"
            Price:50
        } ,
        {
            Ingredient:"Heavy Cream"
            Pos:"RB: S4"
            Price:60
        } 
    ]
    
    
def display()
{
        var html = "<table border='1|1'>";
for (var i = 0; i < s1_rows.length; i++) {
    html+="<tr>";
    html+="<td>"+s1_rows[i].Ingredient+"</td>";
    html+="<td>"+s1_rows[i].Pos+"</td>";
    html+="<td>"+s1_rows[i].Price+"</td>";

    html+="</tr>";
        }
html+="</table>";
document.getElementById("box").innerHTML = html;



