var socket = io() || {};
socket.isReady = false;

window.addEventListener('load', function() {

	var execInUnity = function(method) {
		if (!socket.isReady) return;
		
		var args = Array.prototype.slice.call(arguments, 1);
		
		if(gameInstance!=null)
		{
		//fit formats the message to send to the Unity client game, take a look in NetworkManager.cs in Unity
		gameInstance.SendMessage("NetworkManager", method, args.join(','));
		
		}
		else if(unityInstance!=null)
		{
		  //fit formats the message to send to the Unity client game, take a look in NetworkManager.cs in Unity
		  unityInstance.SendMessage("NetworkManager", method, args.join(','));
		
		}
		
	};//END_exe_In_Unity 

	
	socket.on('PONG', function(socket_id,msg) {
				      		
	  var currentUserAtr = socket_id+','+msg;
	  
	 
	  if(gameInstance!=null)
		{
		 // sends the package currentUserAtr to the method OnPrintPongMsg in the NetworkManager class on Unity
	     gameInstance.SendMessage ('NetworkManager', 'OnPrintPongMsg', currentUserAtr);
	  
		
		}
		else if(unityInstance!=null)
		{
		 
		  unityInstance.SendMessage ('NetworkManager', 'OnPrintPongMsg', currentUserAtr);
		
		}
	  
	});//END_SOCKET.ON

					      
	socket.on('LOGIN_SUCCESS', function(id,name,position,rotation) {
				      		
	  var currentUserAtr = id+','+name+','+position+','+rotation;
	  
	   if(gameInstance!=null)
		{
		 // sends the package currentUserAtr to the method OnJoinGame in the NetworkManager class on Unity
	     gameInstance.SendMessage ('NetworkManager', 'OnJoinGame', currentUserAtr);
	  
		}
		else if(unityInstance!=null)
		{
		 
		  unityInstance.SendMessage ('NetworkManager', 'OnJoinGame', currentUserAtr);
		
		}
	  
	});//END_SOCKET.ON
	
		
	socket.on('SPAWN_PLAYER', function(id,name,position,rotation) {
	
	    var currentUserAtr = id+','+name+','+position+','+rotation;
		
		 if(gameInstance!=null)
		{
		  // sends the package currentUserAtr to the method OnSpawnPlayer in the NetworkManager class on Unity
		  gameInstance.SendMessage ('NetworkManager', 'OnSpawnPlayer', currentUserAtr);
		
		}
		else if(unityInstance!=null)
		{
	     // sends the package currentUserAtr to the method OnSpawnPlayer in the NetworkManager class on Unity
		  unityInstance.SendMessage ('NetworkManager', 'OnSpawnPlayer', currentUserAtr);
		
		}
		
	});//END_SOCKET.ON
	
	socket.on('RESPAW_PLAYER', function(id,name,position,rotation) {
	    var currentUserAtr = id+','+name+','+position+','+rotation;
		
		if(gameInstance!=null)
		{
		 gameInstance.SendMessage ('NetworkManager', 'OnRespawPlayer', currentUserAtr);
		
		}
		else if(unityInstance!=null)
		{
		   unityInstance.SendMessage ('NetworkManager', 'OnRespawPlayer', currentUserAtr);
		}
		
	});//END_SOCKET.ON
	
    socket.on('UPDATE_MOVE_AND_ROTATE', function(id,position,rotation) {
	     var currentUserAtr = id+','+position+','+rotation;
		 	
		if(gameInstance!=null)
		{
			// sends the package currentUserAtr to the method OnUpdateMoveAndRotate in the NetworkManager class on Unity
		   gameInstance.SendMessage ('NetworkManager', 'OnUpdateMoveAndRotate',currentUserAtr);
		
		}
		else if(unityInstance!=null)
		{
		   unityInstance.SendMessage ('NetworkManager', 'OnUpdateMoveAndRotate',currentUserAtr);
		}
		
	});//END_SOCKET.ON
	
	
	 socket.on('UPDATE_PLAYER_ANIMATOR', function(id,animation) {
	 
	     var currentUserAtr = id+','+animation;
		
		if(gameInstance!=null)
		{
			// sends the package currentUserAtr to the method OnUpdateAnim in the NetworkManager class on Unity 
		   gameInstance.SendMessage ('NetworkManager', 'OnUpdateAnim',currentUserAtr);
		
		
		}
		else if(unityInstance!=null)
		{
		  
		   // sends the package currentUserAtr to the method OnUpdateAnim in the NetworkManager class on Unity 
		   unityInstance.SendMessage ('NetworkManager', 'OnUpdateAnim',currentUserAtr);
		}
		
	});//END_SOCKET.ON

	socket.on('UPDATE_ATACK', function(targetId) {
	
	    var currentUserAtr = targetId;
		
	
		if(gameInstance!=null)
		{
		  gameInstance.SendMessage ('NetworkManager', 'OnUpdateAtack',currentUserAtr);
		
		}
		else if(unityInstance!=null)
		{
		    unityInstance.SendMessage ('NetworkManager', 'OnUpdateAtack',currentUserAtr);
		
		}
		
	});//END_SOCKET.ON
	
	
	socket.on('DEATH', function(targetId) {
	
	    var currentUserAtr = targetId;
		
		
		if(gameInstance!=null)
		{
		  gameInstance.SendMessage ('NetworkManager', 'OnPlayerDeath',currentUserAtr);
		
		
		}
		else if(unityInstance!=null)
		{
		 unityInstance.SendMessage ('NetworkManager', 'OnPlayerDeath',currentUserAtr);
		
		}
		
	});//END_SOCKET.ON
	
    socket.on('UPDATE_PHISICS_DAMAGE', function(shooterId,targetId,targetHealth) {
	
	     var currentUserAtr = shooterId+','+targetId+','+targetHealth;
		 
		
		if(gameInstance!=null)
		{
		 gameInstance.SendMessage ('NetworkManager', 'OnUpdatePlayerPhisicsDamage',currentUserAtr);
		
		}
		else if(unityInstance!=null)
		{
		 
		 unityInstance.SendMessage ('NetworkManager', 'OnUpdatePlayerPhisicsDamage',currentUserAtr);
		
		
		}
		
		
	});//END_SOCKET.ON		
	
	
		        
	socket.on('USER_DISCONNECTED', function(id) {
	
	     var currentUserAtr = id;
		 
		if(gameInstance!=null)
		{
		  // sends the package currentUserAtr to the method OnUserDisconnected in the NetworkManager class on Unity
	     gameInstance.SendMessage ('NetworkManager', 'OnUserDisconnected', currentUserAtr);
		 
		 
		
		}
		else if(unityInstance!=null)
		{
		  
		 unityInstance.SendMessage ('NetworkManager', 'OnUserDisconnected', currentUserAtr);
		
		
		}
		 
	
	});//END_SOCKET.ON
	

});//END_window_addEventListener

