function verifyCache (req, res, next) {
    try {
        if(req.URL!= "/login"&&req.URL!="/AddClient")
        {
      const { id } = req.params.id;
      if (cache.has(id)) {
        return res.status(200).json(cache.get(id));
      }
      return next();
    }
    return next();
    } catch (err) {
      throw new Error(err);
    }
  };
  module.export={verifyCache};