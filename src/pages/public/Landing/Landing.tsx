import { Button, Grid } from '@mui/material';
import { useAppDispatch } from '../../../hooks';
import RecipeCard from "../../../components/RecipeCard"
import { displayAlert } from '../../../store/slices/notificationSlice';

function Landing() {

  let data = [{ "name": "Chicken Biryani", "price": "200", "type": "NV", "imageSrc": "https://media.gettyimages.com/id/1183104031/photo/delicious-chicken-biryani.jpg?s=1024x1024&w=gi&k=20&c=DV7mTF1VhqTaR70dAMG4KuTrYE4DUI5PVuR_YMzhL9k=" }, { "name": "Mutton Biryani", "price": "200", "type": "NV", "imageSrc": "https://media.gettyimages.com/id/639704020/photo/hyderabadi-biryani-is-a-form-of-biryani-from-hyderabad-india-it-is-prepared-in-the-form-of.jpg?s=1024x1024&w=gi&k=20&c=Nx5MZPZhcPqsbJNKk5XRNeiF8YQGQ1piYel_clU88lk=" }, { "name": " Vegetable Biryani", "price": "200", "type": "V", "imageSrc": "https://media.gettyimages.com/id/670907141/photo/vegetable-pulao-indian-food.jpg?s=1024x1024&w=gi&k=20&c=mYCvcKd0qE0rczbadFLok-O2-r1dgAiZEzvvmBj9gu0=" }, { "name": "Vegetable Fried Rice", "price": "200", "type": "V", "imageSrc": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 870w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1170w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1470w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1740w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1770w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2070w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2340w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2370w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2670w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2940w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2970w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3270w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3540w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3570w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3870w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4140w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=4170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4170w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4470w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=4740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4740w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=4770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4770w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5070w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=5340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5340w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=5370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5370w, https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=5472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5472w" }, { "name": "Chicken Fried Rice", "price": "200", "type": "NV", "imageSrc": "https://media.istockphoto.com/id/1397479529/photo/asian-chicken-fried-rice-with-chopsticks-directly-above-photo.jpg?s=1024x1024&w=is&k=20&c=SV3_7PHXcvlUHmgE8EMlMKlDGtcGnlTdgbK7up9UmJ8=" }, { "name": "Egg Fried Rice", "price": "200", "type": "NV", "imageSrc": "https://media.istockphoto.com/id/172789635/photo/asian-chinese-fried-rice-with-vegetable-and-egg-with-chopsticks.jpg?s=1024x1024&w=is&k=20&c=QiDqfvUjHIYGyGNrWgIeRrwg5_q5vGeysNpV230SByI=" }, { "name": "Roast Chicken on the BBQ", "price": "200", "type": "NV", "imageSrc": "https://media.istockphoto.com/id/157526986/photo/roast-chicken-on-the-bbq.jpg?s=1024x1024&w=is&k=20&c=MxRpVqJ3QpOdW0uYrWyRdSyEleUseG0EP2sa2Mi_YZE=" }, { "name": "Barbecue Chicken", "price": "200", "type": "NV", "imageSrc": "https://media.istockphoto.com/id/175183193/photo/barbecue-chicken.jpg?s=1024x1024&w=is&k=20&c=t1LWVntJ9FfREQ5Q8ToZAn8Z24JiA7YAyQzD1v94t4o=" }, { "name": "Fish Pulao", "price": "200", "type": "NV", "imageSrc": "https://media.istockphoto.com/id/1254729376/photo/online-food-delivery-fish-pulao-or-biryani-packed-in-plastic-box.jpg?s=1024x1024&w=is&k=20&c=RHHRyP3x0SBHvH0o1OZafXROK0v2zxyqqXUobGeWAzU=" }]
  const dispatch = useAppDispatch()

  const handleOpenSnackbar = () => {
    // Dispatch an action to display the alert message 
    dispatch(displayAlert({ "openAlert": true, alertSeverity: "success", alertMessage: "This is  a sample notification view" }))
  };

  return (
    <div style={{ display: "flex", }}>
      <div>
        <Grid container spacing={4}>
          {data.map((item, index) =>
            <Grid item xs={12} sm={4} md={4} key={`RecipeCard-${index.toString()}`} >
              <RecipeCard name={item.name} price={item.price} type={item.type} imageSrc={item.imageSrc} />
            </Grid>
          )}
        </Grid>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
          <Button onClick={() => handleOpenSnackbar()}> Alert Sample</Button>
        </div>
      </div>
    </div>
  )
}

export default Landing;