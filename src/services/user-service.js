import{UserRepository} from'../repository/index.js'
class UserService{
          constructor()
          {
                    this.userRepository=new UserRepository();
          }
          async signup(data){
                    const user =this.userRepository.create(data); 
                    return user;
          }
}
export default UserService;